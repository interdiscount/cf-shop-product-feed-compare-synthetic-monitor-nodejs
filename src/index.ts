import { CloudEvent, cloudEvent } from "@google-cloud/functions-framework";

// Registriert die Funktion als Eventarc-Handler
cloudEvent("shopProductFeedCompareSyntheticMonitor", (cloudEvent: CloudEvent<{ message: { data: string } }>, res) => {
    try {
        if (!cloudEvent.data || !cloudEvent.data.message) {
            console.error("Invalid event data", cloudEvent);
            return;
        }

        // Nachrichtendaten dekodieren
        const messageData = Buffer.from(cloudEvent.data.message.data, "base64").toString("utf-8");
        console.log("Received Pub/Sub message:", messageData);

    } catch (error) {
        console.error("Error processing event:", error);
    }
});