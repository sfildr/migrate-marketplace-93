import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const AdminNotifications = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const sendNotification = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }

    toast({
      title: "Notification sent",
      description: "The notification has been sent to all users",
    });

    setTitle("");
    setMessage("");
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-4">
        <h3 className="text-lg font-medium mb-4">Send Notification</h3>
        <form onSubmit={sendNotification} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Notification title"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              rows={4}
            />
          </div>
          <Button type="submit">Send Notification</Button>
        </form>
      </div>

      <div className="rounded-lg border p-4">
        <h3 className="text-lg font-medium mb-4">Recent Notifications</h3>
        <div className="space-y-4">
          {[
            {
              id: 1,
              title: "New Feature Release",
              message: "We've just launched our new feature!",
              date: "2024-02-20",
            },
            {
              id: 2,
              title: "System Maintenance",
              message: "Scheduled maintenance this weekend",
              date: "2024-02-19",
            },
          ].map((notification) => (
            <div key={notification.id} className="border-b pb-4">
              <h4 className="font-medium">{notification.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
              <span className="text-xs text-gray-400 mt-2 block">
                {notification.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};