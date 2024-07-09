// TypeScript Code Example Not Adhering to DIP

class ArticleStorage {
  storeArticle(article: any): void {
    console.log("Storing article in database:", article.title);
  }
}

class VideoStorage {
  storeVideo(video: any): void {
    console.log("Storing video in file system:", video.title);
  }
}

class PodcastStorage {
  storePodcast(podcast: any): void {
    console.log("Storing podcast in cloud service:", podcast.title);
  }
}

class ContentManager {
  private articleStorage: ArticleStorage;
  private videoStorage: VideoStorage;
  private podcastStorage: PodcastStorage;

  constructor() {
    this.articleStorage = new ArticleStorage();
    this.videoStorage = new VideoStorage();
    this.podcastStorage = new PodcastStorage();
  }

  storeContent(content: any): void {
    switch (content.type) {
      case "article":
        this.articleStorage.storeArticle(content);
        break;
      case "video":
        this.videoStorage.storeVideo(content);
        break;
      case "podcast":
        this.podcastStorage.storePodcast(content);
        break;
      default:
        throw new Error("Unsupported content type");
    }
  }
}



// TypeScript Code Example Adhering to DIP

interface IContentStorage {
  store(content: any): void;
}

class ArticleStorage implements IContentStorage {
  store(article: any): void {
    console.log("Storing article in database:", article.title);
  }
}

class VideoStorage implements IContentStorage {
  store(video: any): void {
    console.log("Storing video in file system:", video.title);
  }
}

class PodcastStorage implements IContentStorage {
  store(podcast: any): void {
    console.log("Storing podcast in cloud service:", podcast.title);
  }
}

class ContentManager {
  private contentStorage: IContentStorage;

  constructor(contentStorage: IContentStorage) {
    this.contentStorage = contentStorage;
  }

  storeContent(content: any): void {
    this.contentStorage.store(content);
  }
}

const article = { title: "Dependency Inversion Explained", type: "article" };
const video = { title: "Understanding SOLID Principles", type: "video" };
const podcast = { title: "Tech Trends Podcast", type: "podcast" };

let articleManager = new ContentManager(new ArticleStorage());
articleManager.storeContent(article);

let videoManager = new ContentManager(new VideoStorage());
videoManager.storeContent(video);

let podcastManager = new ContentManager(new PodcastStorage());
podcastManager.storeContent(podcast);

// Explanation
// - IContentStorage is an interface that defines a generic store method.
// - Each storage class implements IContentStorage, adhering to the
// principle of depending on abstractions, not concretions.
// - ContentManager is now constructed with any storage class that
// implements IContentStorage, which means adding new content types
// or changing storage options doesn't require changes to ContentManager.

// This example adheres to the Dependency Inversion Principle,
// significantly reducing the system's coupling and increasing
// its flexibility. This design also facilitates easier unit
// testing and maintenance.