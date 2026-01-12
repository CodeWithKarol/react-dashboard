// Mock database
let settingsData = {
  notifications: true,
  marketing: false,
  username: "jdoe",
  email: "jdoe@acme.com",
};

// Simulated Server Action
// In a real RSC app, this would be `export async function updateSettings(prevState, formData)`
// and would run on the server.
export async function updateSettingsAction(
  _prevState: unknown,
  formData: FormData
) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const notifications = formData.get("notifications") === "on";

  // Validation
  if (!username || username.length < 3) {
    return { success: false, message: "Username must be at least 3 chars" };
  }

  // Update "DB"
  settingsData = { ...settingsData, username, email, notifications };
  console.log("Updated DB:", settingsData);

  return {
    success: true,
    message: "Settings updated successfully!",
    timestamp: Date.now(),
  };
}
