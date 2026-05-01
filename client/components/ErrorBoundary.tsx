import React, { ReactNode } from "react";
import { AlertCircle, Home } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details in production
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-red-100 rounded-full">
                <AlertCircle size={48} className="text-red-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Oups! Quelque chose s'est mal passé
            </h1>

            <p className="text-gray-600 mb-4">
              Une erreur inattendue s'est produite. Nous nous excusons pour le
              désagrément.
            </p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                <p className="text-sm font-mono text-red-800 break-words">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Home size={20} />
                Retour à l'accueil
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex-1 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Rafraîchir la page
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Si le problème persiste, contactez-moi:{" "}
              <a
                href="mailto:chancelledanha92@gmail.com"
                className="text-primary hover:underline font-semibold"
              >
                chancelledanha92@gmail.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
