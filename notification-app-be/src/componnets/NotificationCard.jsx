import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";

const NotificationCard = ({ data, viewed }) => {
  return (
    <Card
      style={{
        margin: "10px",
        backgroundColor: viewed ? "#f5f5f5" : "#ffffff",
        borderLeft: viewed ? "4px solid gray" : "4px solid green",
      }}
    >
      <CardContent>
        <Typography variant="h6">{data.Message}</Typography>

        <Typography variant="body2">
          Type: {data.Type}
        </Typography>

        <Typography variant="caption">
          {data.Timestamp}
        </Typography>

        {viewed ? (
          <Chip label="Viewed" color="default" />
        ) : (
          <Chip label="New" color="success" />
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationCard;