import { Component } from 'react'

export default class LogicalOperationsPage extends Component {

  render () {
    return (
		<div id="site">
		
    <style jsx>{`
			h3.caption {
				margin-bottom: 0px;
				width: 317px;
				font-size: 1em;
				text-align: center;
			}	
			
			#site {
				width: 900px;
				height: 700px;
			}
			
			#group1, #group2, #result {
				width: 315px;
				height: 60px;
				border: 1px solid black;
					
			}
			
			#group1 {
				margin: 0 0 10px 0;
			}
			
			#group2 {
				margin: 0;
			}
			
			#result {
				height: 40px;
			}
		
			button.set {
				width: 20px;
				height: 15px;
				margin: 5px 5px;
			}
				
			.numbers {    
				width: 100%;
				height: 20px;
				border: 1px solid black;
				padding: 0 10px;
			}
		
			.numGroup {
				margin: 8px 13px;
				float: left;
				width: 10px;
			}
    `}</style>
		
		
		<h3 class="caption">Operand 1</h3>
		<div id="group1">
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
		</div>
		
		
		<div class="operands">
			<button id="or">or</button>
			<button id="and">and</button>
			<button id="xor">xor</button>
			<button id="xnor">xnor</button>
			
			<button id="add">add</button>
			<button id="sub">sub</button>
			<button id="mul">mul</button>
			<button id="div">div</button>
		</div>
		
		
		<h3 class="caption">Operand 2</h3>
		<div id="group2">
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
				<button class="set"></button>
			</span>
		</div>
				
				
		<h3 class="caption">Result</h3>
		<div id="result">
			<span class="numGroup">
				<div class="numbers">0</div>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
			</span>
			
			<span class="numGroup">
				<div class="numbers">0</div>
			</span>
		</div>

	</div>

    )
  }
}