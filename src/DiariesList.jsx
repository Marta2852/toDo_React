import Diary from "./Diary";

function DiariesList() {
  const diaries = [
    { id: 1, title: "Jagermeister", body: "yum yum yum", date: "23.02.2025" },
    { id: 2, title: "Meow", body: "Mmimimimimimimimi", date: "12.12.2012" },
    { id: 3, title: "Redbull", body: "Redbull gives you wings", date: "25.05.2025" },
  ];

  return (
    <>
      {diaries.map((entry) => (
        <Diary key={entry.id} {...entry} />
      ))}
    </>
  );
}

export default DiariesList;

