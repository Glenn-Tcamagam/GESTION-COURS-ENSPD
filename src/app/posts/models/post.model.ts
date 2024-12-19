import { Cours } from "src/app/cours/models/cours.model";

export interface Post{
    id: string;
    titre: string;
    description: string;
    auteur: string;
    date:Date;

    cours: Cours[]
}