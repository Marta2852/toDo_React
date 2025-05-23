function Diary({ title, body, date }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
        {date}
      </div>
    );
  }
  
export default Diary;