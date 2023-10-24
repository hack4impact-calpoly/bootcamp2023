type Blog={
    title: string;
    date: string;
    description: string
    slug:string
};

const blogs: Blog[]=[
    {
        title:"Blog#1",
        date:"2/2/2024",
        description:"this is description",
        slug: "blog1.html"
    },
    {
        title:"Blog#2",
        date:"12/22/2023",
        description:"this is another description",
        slug: "blog2.html"
    }

]

const container=document.getElementById('blog')

blogs.forEach((element)=>{
    console.log(element)
    const create=document.createElement('div')
    const inner=`<p><b><a href=${element.slug}>${element.title}<a></b><br>${element.description}<br>date: ${element.date}</p>`
    create.innerHTML=inner
    container?.appendChild(create)
})

