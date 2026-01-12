import { useActionState, useOptimistic, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { updateSettingsAction } from "../../lib/actions";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

// Hypothetical Initial State - in real app, fetch this via RSC
const initialSettings = {
  username: "jdoe",
  email: "jdoe@acme.com",
  notifications: true,
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Settings
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your account settings and preferences.
          </p>
        </div>
      </div>
      <div className="max-w-2xl">
        <SettingsForm />
      </div>
    </div>
  );
}

function SettingsForm() {
  // REACT 19: useActionState for form actions

  const [state, formAction] = useActionState(updateSettingsAction, null);

  // REACT 19: useOptimistic for instant UI updates
  const [optimisticSettings, setOptimisticSettings] = useOptimistic(
    initialSettings,
    (current, newValues: FormData) => ({
      ...current,
      username: newValues.get("username") as string,
      email: newValues.get("email") as string,
      notifications: newValues.get("notifications") === "on",
    })
  );

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 overflow-hidden">
      <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-5">
        <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
          Account
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Make changes to your account here. Click save when you're done.
        </p>
      </div>
      <form
        action={async (formData) => {
          setOptimisticSettings(formData);
          // In a real app the action is bound; here we pass it to useActionState's wrapped action
          formAction(formData);
        }}
        ref={formRef}
        className="p-6 space-y-6"
      >
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label
              htmlFor="username"
              className="text-slate-900 dark:text-slate-200"
            >
              Username
            </Label>
            <Input
              id="username"
              name="username"
              defaultValue={optimisticSettings.username}
              className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus-visible:ring-indigo-500"
            />
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="email"
              className="text-slate-900 dark:text-slate-200"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              defaultValue={optimisticSettings.email}
              className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus-visible:ring-indigo-500"
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              defaultChecked={optimisticSettings.notifications}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 dark:border-slate-700 dark:bg-slate-900"
            />
            <Label
              htmlFor="notifications"
              className="text-slate-900 dark:text-slate-200 font-normal"
            >
              Enable Notifications
            </Label>
          </div>

          {state?.success && <p className="text-sm text-green-600">Saved!</p>}
          {state?.success === false && (
            <p className="text-sm text-red-600">{state.message}</p>
          )}
        </div>
        <div className="pt-4 flex justify-end border-t border-slate-200 dark:border-slate-700 mt-6 md:mt-0">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

function SubmitButton() {
  // REACT 19: useFormStatus to handle pending state (must be in a child of the form)
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-500/20"
    >
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Saving..." : "Save Changes"}
    </Button>
  );
}
