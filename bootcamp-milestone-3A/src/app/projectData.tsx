import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema"


async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await Project.find().orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return []
	}
}

const projects=getProjects()

export default projects;