import { redirect } from "next/navigation";
import getCollection, { LINKS_COLLECTION } from "@/db";

interface Props {
    params: { alias: string };
}

export default async function AliasRedirectPage({ params }: Props) {
    const collection = await getCollection(LINKS_COLLECTION);
    const doc = await collection.findOne({ shortId: params.alias });

    if (doc && doc.originalUrl) {
        redirect(doc.originalUrl);
    } else {
        redirect("/"); // Or show a 404 page
    }
}
