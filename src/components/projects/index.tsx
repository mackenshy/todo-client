import {IProject} from './../../interfaces/project.interface';

type ProjectsProps = {
  items: IProject[];
};

const Projects: React.FC<ProjectsProps> = (props: ProjectsProps) => {
  const {items} = props;

  return (
    <ul>
      {items.map((project: IProject) => (
        <li key={project._id}>
          <p>{project.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
