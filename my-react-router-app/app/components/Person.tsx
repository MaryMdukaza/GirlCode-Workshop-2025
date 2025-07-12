import type Person from "~/types/Person";

export default function Profile({ person }: { person: Person }) {
    return (
        <>
            <h1>{person.name}</h1>
            <img className="avatar"
            src={person.imageUrl}
            alt={"A photo of " + person.name}
            style={{
                width: person.imageSize,
                height: person.imageSize,
                }} />
        </>
    );
    
}