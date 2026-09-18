export class AppError extends Error {}

export function handleErrorMsg(err: Error): string {
  return err instanceof AppError
    ? err.message
    : "Something went wrong. Please try again.";
}
