type CourseStaffProps = {
    name: string;
    rating: number;
    title: string;
}

export function CourseStaff({name, rating, title}: CourseStaffProps){
    return(
        <div style={{backgroundColor: "lightblue"}}>
            <h3>Name: {name}</h3>
            <p>Rating: {rating}/100 </p>
            <p>Title: {title}</p>
        </div>
    );
}