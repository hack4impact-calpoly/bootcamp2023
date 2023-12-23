import Navbar from "@/components/navbar";
import PortEntry from "@/components/portEntry";
import connectDB from "@/database/db";
import Port from "@/database/portfolioSchema";

async function getPort(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const portfolio = await Port.find().orFail()
			// send a response as the blogs as the message
	    return portfolio;
	} catch (err) {
        console.log("hi");
	    return null;
	}
}


export default async function Portfolio() {
    const portData = await getPort();
    return (<>
            <html>
            <head>
                <title>
                    Keila's resume
                </title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>
            <nav className="navbar">
                {<Navbar/>}
              </nav>
                <main>
                    <h1 className="page-title">portfolio</h1>
                    <div className="project">
                        <a href="index.html"></a>
                    {portData ? (
                    portData.map(port => 
                                <PortEntry 

                                title={port.title}
                                description={port.description}
                                date={port.date}
                            />
                        )) : (
                            <p>
                                There was an error;
                            </p>
                        )
                    }
                    </div>
                </main>
                <footer></footer>
            </body>
        </html>
        </>)
  }