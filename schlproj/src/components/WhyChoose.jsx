import "./WhyChoose.css"

function WhyChoose(){

const features = [
"CBSE Curriculum",
"Cambridge-based practices",
"Phonics & Abacus",
"English Language",
"Digital Smart Classrooms",
"Qualified Teachers",
"Parent Mobile App",
"Transport Facility",
"Sainik School Foundation"
]

return(

<section className="whychoose">

<h2>Why Choose <span>Open Minds?</span></h2>

<div className="features">

{features.map((item,index)=>(
<div className="feature" key={index}>

<div className="icon">❤</div>

<p>{item}</p>

</div>
))}

</div>

</section>

)

}

export default WhyChoose