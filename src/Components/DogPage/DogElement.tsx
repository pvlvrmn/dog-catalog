function DogElement(props: any) {
  const { breed, onClick, classActive } = props;

  return (
    <div className={`dogs__tile  ${classActive}`} onClick={onClick} aria-hidden="true">
      {breed}
    </div>
  );
}

export default DogElement;
