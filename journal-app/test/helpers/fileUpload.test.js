import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

// ? Config to connect with my resourses
cloudinary.config({
  cloud_name: "db1ylyqov",
  api_key: "938583525914711",
  api_secret: "FHK8f4-PsV4Iazu7DmnYXztB4ck",
  secure: true,
});

describe("Test helpers", () => {
  test("should upload file to cloudinary", async () => {
    const imageUrl =
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    // ? You get an image from API with JavaScript Fetch API,
    const fetchImage = await fetch(imageUrl);
    // ? We can call the response’s blob method
    const blobImage = await fetchImage.blob();
    // ? Auun use File constructor to create an image file
    const fileImage = new File([blobImage], "foto.jpg");

    const resp = await fileUpload(fileImage);
    expect(typeof resp).toBe("string");

    const splitPath = resp.split("/");
    const idImageToDelete = splitPath[splitPath.length - 1].replace(".jpg", "");
    // To delete images from cloudinary
    const cloudResp = await cloudinary.api.delete_resources([
      `journal/${idImageToDelete}`,
    ]);
  });

  test("should return null if file not exist", async () => {
    const fileImage = new File([], "foto.jpg");
    const resp = await fileUpload(fileImage);

    expect(resp).toBe(null);
  });
});

// cloudinary.v2.api.delete_resources(public_ids, options, callback);
