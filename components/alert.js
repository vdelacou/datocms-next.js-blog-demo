import Container from "./container";
import cn from "classnames";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-sm text-center">
          {preview ? (
            <>
              This is page is showing draft content.{" "}
              <a
                href="/api/exit-preview"
                className="underline transition-colors duration-200 hover:text-cyan"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              This is page is showing published content.{" "}
              <a
                href="/api/preview?secret=secret"
                className="underline transition-colors duration-200 hover:text-cyan"
              >
                Click here
              </a>{" "}
              to enter preview mode!
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
