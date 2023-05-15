import Masonry from "react-responsive-masonry";

const ProjectList = ({list}) => {
  return (
    <div className="list">
      <Masonry columnsCount={3} gutter={'20px'}>
        {list.map((image, idx) => (
        <img className="list-item" key={'img-' + idx} src={image.img} />
        ))}
      </Masonry>
    </div>
  );
};

export default ProjectList;