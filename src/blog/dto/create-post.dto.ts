/* Since we are posting data to the db, create 
a Data transfer object to define how data
will be sent over the network
*/
export class CreatePostDTO {
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly author: string;
  readonly date_posted: string
}