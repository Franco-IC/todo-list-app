export default function taskFieldsValidations(title, description) {
  if (title.trim().length < 6 || description.trim().length < 10)
    throw new Error(
      "Title/Description should be at least 6/10 characters long respectively"
    );

  if (title.length > 50)
    throw new Error("Title should be less than 50 characters long");
  if (description.length > 100)
    throw new Error("Description should be less than 100 characters long");
}
