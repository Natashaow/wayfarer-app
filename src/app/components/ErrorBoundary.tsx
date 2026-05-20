import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      // token-audit-exception: hardcoded-color, inline-style, inline-fontsize-px — ErrorBoundary intentionally avoids Tailwind/CSS-variable dependencies so it can render even if the design-system CSS fails to load. Hex colours mirror --background (#fff), --primary (#d95d39), --card (#f3f4f5); fontSize 0.75rem mirrors --text-caption mid-tier. Keep in sync if those tokens shift.
      return (
        <div style={{ padding: "2rem", fontFamily: "monospace", background: "#fff", minHeight: "100vh" }}>
          <h2 style={{ color: "#d95d39", marginBottom: "1rem" }}>Render Error</h2>
          <pre style={{ background: "#f3f4f5", padding: "1rem", borderRadius: "8px", overflow: "auto", fontSize: "0.75rem" }}>
            {this.state.error?.message}
            {"\n\n"}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
