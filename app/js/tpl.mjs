
const tpl = {
  card: _.template('<div class="card bg-secondary mb-2 text-center"><div class="card-body"><h2 class="card-title text-center mt-2 mb-2"><%= name %></h2><img class="img-fluid mb-2" src="./app/img/leaf.png"/><div><a href="./strain.html#<%= name %>" class="btn btn-success">Details</a></div></div></div>'),
  strain: _.template()
}

export {tpl};
