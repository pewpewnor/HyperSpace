/*
 * Notes for Database:
 * - Upvote in DB will store which user upvotes, but for thread component, only returns length of that array
 * - Downvote is the same thing as DB
 * - Comments is the same thing
 */

const threadData = [
	{
		ID: "THR001",
		postDate: 1677764208799,
		views: 4234,
		title: "How to Talk to People",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque illo, beatae doloremque aut quis modi quidem pariatur in, eius saepe omnis unde consectetur repellendus corporis error ab veritatis delectus veniam a amet. Cupiditate nulla, quibusdam excepturi nam beatae et magnam ipsum natus molestiae eos hic corrupti minus, vel enim accusamus rerum, sunt nisi numquam unde velit. Blanditiis expedita natus sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum quo, corrupti consequuntur in placeat culpa. Inventore sed id omnis minima. Fugiat ea iure obcaecati optio vero? Ad eaque ratione atque accusantium deleniti autem ipsum, facere alias tempore nesciunt in totam quaerat doloremque omnis consequatur quibusdam reprehenderit aliquam? Perferendis nihil modi amet quaerat obcaecati mollitia saepe voluptates praesentium atque excepturi quia esse laborum provident doloribus, doloremque vero temporibus dolorem laboriosam fuga voluptatem, minima molestias labore ex ducimus. Omnis provident vel optio! Cupiditate a excepturi nam labore eum magni dolorem! Distinctio minus consequuntur, accusamus et earum aspernatur inventore impedit maxime aliquam",
		pictures: ["/assets/post-pic-1.png"],
		upvote: 15,
		downvote: 5000,
		comments: 10,
		userID: "USR001",
	},
	{
		ID: "THR002",
		postDate: 1677754308799,
		views: 143,
		title: "What is the meaning of life?",
		text: "This text should not be long enough to be cut off!!!",
		pictures: ["/assets/post-pic-1.png"],
		upvote: 123124,
		downvote: 2,
		comments: 12,
		userID: "USR002",
	},
	{
		ID: "THR003",
		postDate: 1677454308799,
		views: 69,
		title: "I have a problem with this",
		text: "I realize and understand why this isn't valid JSX, since JSX maps to function calls. However, coming from template land and being new to JSX, I am unsure how I would achieve the above (adding a component multiple times).",
		pictures: ["/assets/post-pic-1.png"],
		upvote: 13,
		downvote: 3,
		comments: 4,
		userID: "USR003",
	},
];

export default threadData;
