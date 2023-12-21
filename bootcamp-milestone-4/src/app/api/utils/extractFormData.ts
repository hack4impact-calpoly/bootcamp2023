import { IComment } from "@/app/database/blogSchema";

/**
 * Extracts comment data from a FormData object.
 *
 * @param formData - The FormData object containing the comment data.
 * @returns The extracted comment data as an IComment object, or null if the required fields are missing.
 */

export const extractFormData = (formData: FormData): IComment | null => {
  if (!formData || !formData.has("user") || !formData.has("comment")) {
    return null;
  }

  const object = Object.fromEntries(Array.from(formData.entries()));

  return {
    user: object.user.toString(),
    comment: object.comment.toString(),
    time: new Date(),
  };
};
