import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const savedMessage = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        message: "Thank you for your message. We'll be in touch soon!",
        data: savedMessage
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  // API route to get all contact messages (could be used for an admin panel)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve contact messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
