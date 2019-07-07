import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment total votes when upvoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement total votes when downvoted', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});