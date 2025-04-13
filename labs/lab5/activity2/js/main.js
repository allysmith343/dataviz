const familyData = {

  name: "Ally Smith",
  gender: "Female",
  birthday: "March 4, 2003",
  children: [
    {
      name: "Henry Chesley-Vogels",
      gender: "Male",
      birthday: "October 26, 2002"
    },
  
    {
      name: "Amy Haan",
      gender: "Female",
      birthday: "March 9, 1970",
      children: [
        { 
          name: "Jim Haan",
          gender: "Male",
          birthday: "October 15, 1951"
        },
        {
          name: "Thomas Haan",
          gender: "Male",
          birthday: "November 3, 1949",
        },
        {
          name: "Connie Bango",
          gender: "Female",
          birthday: "June 7, 1949"
        }
      ]
    },
    {
      name: "Ian Smith",
      gender: "Male",
      birthday: "February 12, 1969",
      children: [
        {
          name: "Thomas Smith",
          gender: "Male",
          birthday: "January 31, 1947"
        },
        {
          name: "Lynda Glaser",
          gender: "Female",
          birthday: "May 25, 1947"
        }
      ]
    },
    {name: "Kyle Smith",
    gender: "Male",
    birthday: "March 27, 2001",
    }
  ]
};

const tidyTree = new TidyTree({ parentElement: '#tidy-tree'}, familyData);
