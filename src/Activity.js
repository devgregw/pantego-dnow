import React from 'react'
import {Badge, Button} from 'reactstrap'

export default class Activity extends React.Component {
    
    constructor(props) {
        super(props)
        this.tasks = [
            {
                level: 1,
                task: 'Write a song and perform it for someone you don\'t know - 25 seconds',
                type: 'v'
            },
            {
                level: 1,
                task: 'Get a roll of toilet paper from a public bathroom',
                type: 'v'
            },
            {
                level: 1,
                task: 'Hold a baby',
                type: 'p'
            },
            {
                level: 1,
                task: 'Pay for groceries of a stranger',
                type: 'p'
            },
            {
                level: 1,
                task: 'Pump gas for a stranger',
                type: 'p'
            },
            {
                level: 1,
                task: 'Buy a pack of gum and ask 10 people if they need some gum',
                type: 'v'
            },
            {
                level: 1,
                task: 'Walk someone\'s dog',
                type: 'p'
            },
            {
                level: 1,
                task: 'Bring Sam a cake that says "Iowa" to the evening session',
                type: 's'
            },
            {
                level: 1,
                task: 'Give a random person flowers',
                type: 'v'
            },
            {
                level: 1,
                task: 'Ask someone permission that you don\'t know to use the bathroom wherever you are',
                type: 'v'
            },
            {
                level: 2,
                task: 'Call a family member and explain the rules of monopoly to them',
                type: 'v'
            },
            {
                level: 2,
                task: 'Select one person to brush the teeth of everyone in the group',
                type: 'v'
            },
            {
                level: 2,
                task: 'Reenact a drama in a Wal-Mart (without causing a scene)',
                type: 'v'
            },
            {
                level: 2,
                task: 'Do someone\'s makeup blindfolded',
                type: 'v'
            },
            {
                level: 2,
                task: 'Take a shower somewhere other than your host home (someone\'s house in the group) with all your clothes on',
                type: 'v'
            },
            {
                level: 2,
                task: 'Eat a tortilla wrap made with ingredients from everyone in the group',
                type: 'v'
            },
            {
                level: 2,
                task: 'Do 40 push-ups in 40 seconds',
                type: 'v'
            },
            {
                level: 2,
                task: 'Create memes for all of the student ministry team',
                type: 'p'
            },
            {
                level: 2,
                task: 'Make a group dance for 30 seconds',
                type: 'v'
            },
            {
                level: 2,
                task: 'Zion Challenge',
                type: ''
            },
            {
                level: 3,
                task: 'Buy a Starbucks drink',
                type: 'p'
            },
            {
                level: 3,
                task: 'Draw self portraits of one or more of the student ministry team and bring them to the session',
                type: 's'
            },
            {
                level: 3,
                task: 'Help another team accomplish 3 tasks',
                type: 'pv'
            },
            {
                level: 3,
                task: 'Thrift something unique to wear the rest of the day (designate someone in the group or leader)',
                type: 'p'
            },
            {
                level: 3,
                task: 'Find David Daniels and recite the BYX (Brothers Under Christ, pronounced "bucks") mission statement: "BYX exists for the purpose of astablishing brotherhood and unity among college men based on the common bond of Jesus Christ."',
                type: 'v'
            },
            {
                level: 3,
                task: 'Freestyle rap for 30 seconds',
                type: 'v'
            },
            {
                level: 3,
                task: 'Find and clean up an area where there\'s noticeable trash',
                type: 'pv'
            },
            {
                level: 3,
                task: 'Walk a cat',
                type: 'pv'
            },
            {
                level: 3,
                task: 'Buy a meal for someone',
                type: 'pv'
            },
            {
                level: 3,
                task: 'Send a paragraph text message to Alex or Gage blindfolded',
                type: 'v'
            },
        ]
    
        this.state = {
            completed: this.tasks.filter(t => window.localStorage.getItem(t.task) === 'true')
        }
        this.createHandler = this.createHandler.bind(this)
        this.refresh = this.refresh.bind(this)
        this.calculatePoints = this.calculatePoints.bind(this)
    }

    calculatePoints() {
        var level1 = this.state.completed.filter(t => t.level === 1).length
        var level2 = level1 >= 5 ? this.state.completed.filter(t => t.level === 2).length : 0
        var level3 = level2 >= 5 ? this.state.completed.filter(t => t.level === 3).length : 0
        var score = level1 * 50 + level2 * 100 + level3 * 150
        if (level1 === 10 && level2 === 10 && level3 === 10)
            score += 1000
        else if (level1 >= 5 && level2 >= 5)
            score += 500
        return score
    }

    refresh() {
        this.setState({
            completed: this.tasks.filter(t => window.localStorage.getItem(t.task) === 'true')
        })
    }

    createHandler(t) {
        return (event) => {
            event.persist()
            window.localStorage.setItem(t.task, event.target.checked)
            this.refresh()
        }
    }

    render() {
        return <div>
            <div style={{background: '#2F478F', width: '100%', padding: '5px', height: '48px', textAlign: 'center'}}>
                <Button color="light" style={{float: 'left'}} onClick={() => window.location.replace('/')}>Back</Button>
                <p style={{color: 'white', fontSize: '1.1rem', position: 'relative', top: '50%', transform: 'translateY(-50%)', left: '-29.33px', display: 'inline-block'}}>Saturday Activity</p>
            </div>
            <div style={{padding: '5px'}}>
            <h3>Instructions</h3>
            <p>
            There are 3 levels, and 10 tasks per level.<br/>
            Point values:<br/>
            Level 1: 50 points/task<br/>
            Level 2: 100 points/task<br/>
            Level 3: 150 points/task<br/><br/>
            Once you complete at least 5 tasks in a level, you can move on to the next level.<br/>
            Your group will get 500 additional points for <i>unlocking</i> all 3 levels and 1000 additional points for completing all tasks.
            </p>
            <h5>Post your pictures and videos to <a href="https://www.instagram.com" target="_blank">Instagram</a> with the hashtag <a href="https://www.instagram.com/explore/tags/rhythm18/" target="_blank">#rhythm18</a>!</h5>
            <hr/>
            <h3>Scoreboard</h3>
            <p>Keep track of your activity score by checking off tasks in the list. The score shown is only an estimate of your group's activity score and may not represent your actual score.</p>
            <h1>{this.calculatePoints()} points</h1>
            <hr/>
            <h3>Tasks</h3>
            <form>
                {this.tasks.map((t, i) => <div key={t.task}>{i === 0 ? <h5>Level 1</h5> : null}<input type="checkbox" onChange={this.createHandler(t).bind(this)} defaultChecked={this.state.completed.includes(t)} id={t.task}/>&nbsp;{t.type ? <Badge>{t.type === 'p' ? 'Picture' : t.type === 'v' ? 'Video' : t.type === 's' ? 'Bring to session' : 'Picture or video'}</Badge> : null}&nbsp;<label htmlFor={t.task}>{t.task}</label>{i === 9 || i === 19 ? <div><hr/><h5>{i === 9 ? 'Level 2' : 'Level 3'}</h5></div> : null}</div>)}
            </form>
            </div>
        </div>
    }
}