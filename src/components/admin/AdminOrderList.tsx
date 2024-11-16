import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface AdminOrderListProps {
  searchQuery: string;
}

export const AdminOrderList = ({ searchQuery }: AdminOrderListProps) => {
  const { toast } = useToast();

  const mockOrders = [
    {
      id: "ORD001",
      customer: "John Doe",
      date: "2024-02-20",
      status: "pending",
      total: 299.99,
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      date: "2024-02-19",
      status: "completed",
      total: 159.99,
    },
  ];

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    toast({
      title: "Order status updated",
      description: `Order ${orderId} has been marked as ${newStatus}`,
    });
  };

  const filteredOrders = mockOrders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateOrderStatus(order.id, 'completed')}
                >
                  Mark as Completed
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};