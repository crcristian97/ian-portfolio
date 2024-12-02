export const filterByCategory = (projects = [], selectedCategory = 'TODAS') => {
    return projects.filter(project =>
      selectedCategory === 'TODAS' ? true : project.category === selectedCategory
    );
  };
  