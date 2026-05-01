import { RequestHandler } from "express";
import { ContactFormData, ContactFormResponse } from "@shared/api";
import * as fs from "fs";
import * as path from "path";

// Directory to store submissions
const DATA_DIR = path.join(process.cwd(), ".data");
const SUBMISSIONS_FILE = path.join(DATA_DIR, "submissions.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Load existing submissions
function loadSubmissions(): (ContactFormData & { id: string; timestamp: string })[] {
  try {
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      const data = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error loading submissions:", error);
  }
  return [];
}

// Save submissions to file
function saveSubmissions(
  submissions: (ContactFormData & { id: string; timestamp: string })[]
): void {
  try {
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
  } catch (error) {
    console.error("Error saving submissions:", error);
    throw new Error("Failed to save submission");
  }
}

// Generate unique ID
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Validate email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const handleContactForm: RequestHandler = (req, res) => {
  try {
    const { name, email, message } = req.body as ContactFormData;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont obligatoires",
      } as ContactFormResponse);
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Email invalide",
      } as ContactFormResponse);
    }

    // Validate field lengths
    if (name.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Le nom est trop long",
      } as ContactFormResponse);
    }

    if (message.length > 5000) {
      return res.status(400).json({
        success: false,
        message: "Le message est trop long",
      } as ContactFormResponse);
    }

    // Load existing submissions
    const submissions = loadSubmissions();

    // Create new submission
    const submission = {
      id: generateId(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Add to submissions
    submissions.push(submission);

    // Save to file
    saveSubmissions(submissions);

    // Return success response
    res.status(200).json({
      success: true,
      message: "Merci! Votre message a été reçu avec succès.",
      id: submission.id,
    } as ContactFormResponse);
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur. Veuillez réessayer plus tard.",
    } as ContactFormResponse);
  }
};

// Optional: Get all submissions (admin endpoint - should be protected in production)
export const getSubmissions: RequestHandler = (req, res) => {
  try {
    const submissions = loadSubmissions();
    res.status(200).json({
      success: true,
      data: submissions,
      count: submissions.length,
    });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur.",
    });
  }
};
