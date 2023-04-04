import React from 'react'

const Skill = () => {
    const Progress = ({done,title}) => {
        return (
            <div className="progress">
                <div className="progress-done" style={{ opacity: 1, width: `${done}%`}}>
                    <h4>{title}</h4>
                    <h4>{done} %</h4>
                </div>
            </div>
        )
    }

    const data = [
        {
            title: 'Every day is a new challenege',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sunt dicta eum ipsum unde, non inventore ratione numquam ipsa, animi eaque? Sapiente porro veniam modi molestiae voluptate quo impedit magni!',
            para1: '',
        },
    ]
  return (
    <div>
        <section className="skill">
            
            <div className="container">
                <div className="heading">
                    <h3>WHY CHOOSE US</h3>
                    <h1>SOME OF MY SKILLS</h1> 
                </div>
                <div className="content flex">
                    <div className="left topMargin">
                        <Progress done='70' title='HTML'/>
                        <Progress done='80' title='CSS'/>
                        <Progress done='90' title='JAVASCRIPT'/>
                        <Progress done='70' title='REACT-JS'/>
                    </div>
                    <div className="right mtop">
                        {data.map((val) =>{
                            return (
                                <>
                                <h1>{val.title}</h1>
                                <p>{val.para}</p>
                                <p>{val.para1}</p>
                                <button className="primary-btn">Hire me</button>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skill