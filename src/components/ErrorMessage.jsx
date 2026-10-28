export default function ErrorMessage({ message, onRetry }) {
  return (
    <div>
      <p id="error" role="alert">
        {message}
      </p>

      <button
        type="button"
        id="retry-button"
        onClick={onRetry}
      >
        Try again
      </button>
    </div>
  );
}