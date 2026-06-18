import { Card, CardContent, Typography } from "@mui/material";

export default function NotificationCard({ data }) {
  return (
    <Card style={{ margin: 10 }}>
      <CardContent>
        <Typography variant="h6">{data.message}</Typography>
        <Typography>{data.type}</Typography>
        <Typography variant="caption">{data.createdAt}</Typography>
      </CardContent>
    </Card>
  );
}