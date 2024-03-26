import { graph, config, auth} from '@grafbase/sdk'

const g = graph.Standalone()


const User = g.model('User',{
  name: g.string().length({min : 2,max: 20}),
  email: g.string().unique(),
  avatarUrl : g.url(),
  linkedInUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  projects: g.relational(() => Project).list().optional()
})

const Project = g.model('Project',{
  title : g.string().length({min:3}),
  description: g.string(),
  image: g.url(),
  liveSiteUrl : g.url(),
  category: g.string().search(),
  createdy: g.relational(() => User)
})

export default config({
  graph : g
})