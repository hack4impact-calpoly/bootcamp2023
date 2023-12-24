import { IComment } from "@/database/commentSchema";

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