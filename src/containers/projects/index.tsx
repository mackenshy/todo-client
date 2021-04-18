import {useQuery} from '@apollo/client';

import {Loading} from './../../components/loading';
import Projects from './../../components/projects';
import {PROJECT_QUERY} from './../../queries';

const ProjectsContainer: React.FC = () => {
  const {loading, error, data} = useQuery(PROJECT_QUERY);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return <Projects items={data.projects} />;
};

export default ProjectsContainer;
