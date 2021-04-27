import '../css/solutions.css'

function Solutions() {

  const solutions = [
    { 
      title: 'eCommerce Solutions',
      lists: [
        'Real State eCommerce Solution',
        'Clothing eCommerce Solution',
        'Medical/Healthcare eCommerce Solution'
      ]
    },
    {
      title: 'On-Demand Solutions',
      lists: [
        'Food Delivery',
        'Taxi booking',
        'Medical Delivery',
        'Grocery Delivery',
        'eLearning'
      ]
    },
    { title: 'IoT Solutions', lists: [] }
  ]

  return (
    <div className='solutions container'>
      { solutions.map( (m, i) => (
          <div className='solution-item' key={ i }>
            <div className='solution-item-head'>{ m.title }</div>
            { 
              m.lists.map( (l, a) => (
                <div  key={ a } className='solution-lists-div'>
                  <div><span>{ a + 1 }.</span> { l }</div>
                </div>
              ))
            }
          </div>
        )) 
      }
    </div>  
  )  
}

export default Solutions