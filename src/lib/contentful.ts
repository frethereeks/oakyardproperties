import { createClient } from "contentful";
import { config } from "../config";

export const contentfulClient = createClient({
    space: config.CONTENTFUL.SPACE_ID,
    accessToken: config.CONTENTFUL.ACCESS_TOKEN,
});
