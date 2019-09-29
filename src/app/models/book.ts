export class Book {
    id: string;
    type: string;
    links: Link;
    attributes: Attribute;
    relationships: Relationship;
}

class Link {
    self?: string;
    related?: string;
}

class Attribute {
    urn: string;
    created_at: string;
    updated_at: string;
    content: string;
    properties: any;
    display_properties: DisplayProperty
}

class DisplayProperty {
    type: string;
    image: string;
}

class Relationship {
    authors: Author;
    publishers: Publisher;
}

class Author {
    links: Link;
}

class Publisher {
    links: Link;
}
