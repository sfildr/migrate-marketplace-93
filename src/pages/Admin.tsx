import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Search, Bell, Users, Package } from "lucide-react";
import { AdminUserList } from "@/components/admin/AdminUserList";
import { AdminOrderList } from "@/components/admin/AdminOrderList";
import { AdminNotifications } from "@/components/admin/AdminNotifications";

const Admin = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <Package className="w-4 h-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <div className="mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <TabsContent value="users">
          <AdminUserList searchQuery={searchQuery} />
        </TabsContent>

        <TabsContent value="orders">
          <AdminOrderList searchQuery={searchQuery} />
        </TabsContent>

        <TabsContent value="notifications">
          <AdminNotifications />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;