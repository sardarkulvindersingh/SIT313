import { Card, Image, Button, Rating } from "semantic-ui-react";

function FeaturedTutorials() {
  const tutorials = [
    {
      id: 1,
      title: "Building",
      description:
        "They reflect culture, history, and the progress of architecture and engineering.",
      user: "Master90",
      rating: 4,
      image: "https://picsum.photos/seed/csharp/400/240",
    },
    {
      id: 2,
      title: "Mountains",
      description:
        "Mountains are majestic natural wonders that rise high above the land.",
      user: "Ninja",
      rating: 4.5,
      image: "https://picsum.photos/seed/reactrouter/400/240",
    },
    {
      id: 3,
      title: "Forest",
      description:
        "They are home to diverse wildlife and countless plant species.",
      user: "Guru",
      rating: 4.9,
      image: "https://picsum.photos/seed/express/400/240",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Featured Tutorials</h2>
      <Card.Group itemsPerRow={3}>
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id}>
            <Image src={tutorial.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{tutorial.title}</Card.Header>
              <Card.Description>{tutorial.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Rating
                icon="star"
                defaultRating={Math.round(tutorial.rating)}
                maxRating={5}
                disabled
              />
              <span style={{ marginLeft: "10px" }}>by {tutorial.user}</span>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Button basic color="grey" style={{ marginTop: "15px" }}>
        See all tutorials
      </Button>
    </div>
  );
}

export default FeaturedTutorials;
