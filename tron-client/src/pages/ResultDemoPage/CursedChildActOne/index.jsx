// components
import PageTitle from "../../../components/PageTitle";
import Dialogue from "../Dialogue";

const drama = [
  {
    actorName: "Narrator",
    text: "A busy and crowded station. Full of people trying to go somewhere. Amongst the hustle and bustle, two large cages rattle on top of two laden trolleys. They’re being pushed by two boys, James Potter and Albus Potter , their mother, Ginny , follows after. A thirty-seven-year-old man, Harry , has his daughter, Lily , on his shoulders.",
    audioUrl: "narrator1.wav",
  },
  {
    actorName: "Albus",
    text: "Dad. He keeps saying it",
    audioUrl: "albus1.wav",
  },
  {
    actorName: "Harry",
    text: "James, give it a rest.",
    audioUrl: "harry1.wav",
  },
  {
    actorName: "James",
    text: "I only said he might be in Slytherin. And he might so. Umm... fine.",
    audioUrl: "james1.wav",
  },
  {
    actorName: "Albus",
    text: "You’ll write to me, won’t you?",
    audioUrl: "albus2.wav",
  },
  {
    actorName: "Ginny",
    text: "Every day if you want us to.",
    audioUrl: "ginny1.wav",
  },
  {
    actorName: "Albus",
    text: "No. Not every day. James says most people only get letters from home about once a month. I don’t want to.",
    audioUrl: "albus3.wav",
  },
  {
    actorName: "Harry",
    text: "We wrote to your brother three times a week last year",
    audioUrl: "harry2.wav",
  },
  {
    actorName: "Albus",
    text: "What? James!!",
    audioUrl: "albus4.wav",
  },
  {
    actorName: "Ginny",
    text: "Yes. You may not want to believe everything he tells you about Hogwarts. He likes a laugh, your brother.",
    audioUrl: "ginny2.wav",
  },
  {
    actorName: "James",
    text: "Can we go now, please?",
    audioUrl: "james2.wav",
  },
  {
    actorName: "Ginny",
    text: "All you have to do is walk straight at the wall between platforms nine and ten.",
    audioUrl: "ginny3.wav",
  },
  {
    actorName: "Lily",
    text: "I’m so excited.",
    audioUrl: "lily1.wav",
  },
  {
    actorName: "Harry",
    text: "Don’t stop and don’t be scared you’ll crash into it, that’s very important. Best to do it at a run if you’re nervous.",
    audioUrl: "harry3.wav",
  },
  {
    actorName: "Albus",
    text: "I’m ready.",
    audioUrl: "albus5.wav",
  },
  {
    actorName: "Narrator",
    text: "Harry and Lily put their hands on Albu’s trolley — Ginny joins James’s trolley — together, the family run hard into the barrier.",
    audioUrl: "narrator2.wav",
  },
];

const CursedChildActOne = ({ title, id }) => {
  return (
    <section id={id}>
      <PageTitle title={title} />
      <div>
        {drama.map((person, personIdx) => (
          <Dialogue key={personIdx} {...person} />
        ))}
      </div>
    </section>
  );
};

export default CursedChildActOne;
