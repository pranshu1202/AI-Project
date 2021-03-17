
// var nodes = new vis.DataSet([
//     {id: 1, label: 'Node 1'},
//     {id: 2, label: 'Node 2'},
//     {id: 3, label: 'Node 3'},
//     {id: 4, label: 'Node 4'},
//     {id: 5, label: 'Node 5'}
// ]);

// // create an array with edges
// var edges = new vis.DataSet([
//     {from: 1, to: 3},
//     {from: 1, to: 2},
//     {from: 2, to: 4},
//     {from: 2, to: 5}
// ]);

// // create a network
// var container = document.getElementById('graph');

// // provide the data in the vis format
// var data = {
//     nodes: nodes,
//     edges: edges
// };
// var options = {};

// // initialize your network!
// var network = new vis.Network(container, data, options);

// function delete_graph() {
// 	network.destroy();
// }

var nodes;
var edges;
var network;
var nodeIds = 0;
var edgeIds = 0;

function addNode() {
	try {
		nodes.add({
			id: document.getElementById("node-insert").value,
			label: document.getElementById("node-insert").value + "\n h(" + document.getElementById("heuristic").value + ")",
            heuristic: document.getElementById("heuristic").value,
			
		});
		console.log(nodes);
	} 
	catch (error) {
		alert(error);
	}
}
function delNode() {
	try { 
		nodes.remove({
			id: document.getElementById("node-delete").value,
		});	
		console.clear(nodes);
	} 
	catch (error) {
		alert(error);
	}
}
function addEdge() {
	try {
		edges.add({
			id: document.getElementById("node-from").value.concat("-",document.getElementById("node-to").value),
			from: document.getElementById("node-from").value,
			to: document.getElementById("node-to").value,
			label : document.getElementById("weight").value,
			arrows: "to" ,
			font: { align: "top" },
		});
		console.log(edges);
	} catch (error) {
		alert(error);
	}
}

function UpdW() {
	try {
		edges.update({
			id: document.getElementById("node-from1").value.concat("-",document.getElementById("node-to1").value),
			label : document.getElementById("new-weight").value,
		});
		console.log(edges);
	} catch (error) {
		alert(error);
	}
}

function UpdH() {
	try {
		nodes.update({
			id: document.getElementById("node1").value,
			label: document.getElementById("node-insert").value + "\n h(" + document.getElementById("heuristic1").value + ")",
            heuristic: document.getElementById("heuristic1").value,
			
		});
		console.log(nodes);
	} 
	catch (error) {
		alert(error);
	}
}
function DelE() {
	try { 
		edges.remove({
			id: document.getElementById("node-from2").value.concat("-",document.getElementById("node-to2").value),
		});	
		console.clear(nodes);
	} 
	catch (error) {
		alert(error);
	}
	
	
		
}

function createGraph() {
	nodes = new vis.DataSet();
	edges = new vis.DataSet();
	
	var container = document.getElementById('graph');
	
	var data = {
		    nodes: nodes,
		    edges: edges
		};
	var options = {};
	network = new vis.Network(container, data, options);

}

window.addEventListener("load", ()=>{
	createGraph();
})

