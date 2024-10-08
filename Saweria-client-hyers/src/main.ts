import express, { Request, Response } from "express";
import dotenv from "dotenv";
import keyAction from "robotjs";

interface DonationData {
  donator_name: string;
  amount_raw: number;
}

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/skill1", (req: Request, res: Response) => {
  const { donator_name, amount_raw }: DonationData = req.body;

  console.log("Donasi telah didapatkan dari: " + donator_name);
  console.log("Donasi berjumlah: Rp." + amount_raw);
  console.log("Menjalankan fitur auto skill 1");
  console.log(
    "========================================================================"
  );

  keyAction.keyTap("j");

  res.json({
    status: "success",
    message: `Donation received from ${donator_name}`,
  });
});

app.post("/skill2", (req: Request, res: Response) => {
  const { donator_name, amount_raw }: DonationData = req.body;

  console.log("Donasi telah didapatkan dari: " + donator_name);
  console.log("Donasi berjumlah: Rp." + amount_raw);
  console.log("Menjalankan fitur auto skill 2");
  console.log(
    "========================================================================"
  );

  keyAction.keyTap("k");

  res.json({
    status: "success",
    message: `Donation received from ${donator_name}`,
  });
});

app.post("/skill3", (req: Request, res: Response) => {
  const { donator_name, amount_raw }: DonationData = req.body;

  console.log("Donasi telah didapatkan dari: " + donator_name);
  console.log("Donasi berjumlah: Rp." + amount_raw);
  console.log("Menjalankan fitur auto skill 3");
  console.log(
    "========================================================================"
  );

  keyAction.keyTap("l");

  res.json({
    status: "success",
    message: `Donation received from ${donator_name}`,
  });
});

app.post("/spell", (req: Request, res: Response) => {
  const { donator_name, amount_raw }: DonationData = req.body;

  console.log("Donasi telah didapatkan dari: " + donator_name);
  console.log("Donasi berjumlah: Rp." + amount_raw);
  console.log("Menjalankan fitur auto spell");
  console.log(
    "========================================================================"
  );

  keyAction.keyTap("h");

  res.json({
    status: "success",
    message: `Donation received from ${donator_name}`,
  });
});

app.post("/recall", (req: Request, res: Response) => {
  const { donator_name, amount_raw }: DonationData = req.body;

  console.log("Donasi telah didapatkan dari: " + donator_name);
  console.log("Donasi berjumlah: Rp." + amount_raw);
  console.log("Menjalankan fitur auto recall recall");
  console.log(
    "========================================================================"
  );

  var timer = Date.now();
  while (Date.now() - timer < 10000) {
    keyAction.keyTap("b");
  }

  res.json({
    status: "success",
    message: `Donation received from ${donator_name}`,
  });
});

app.post("/surrender", (req: Request, res: Response) => {
  const { donator_name, amount_raw }: DonationData = req.body;

  console.log("Donasi telah didapatkan dari: " + donator_name);
  console.log("Donasi berjumlah: Rp." + amount_raw);
  console.log("Menjalankan fitur auto surrender");
  console.log(
    "========================================================================"
  );

  keyAction.keyTap("p");
  setTimeout(function () {
    keyAction.keyTap("0");
  }, 1000);

  res.json({
    status: "success",
    message: `Donation received from ${donator_name}`,
  });
});

app.post("/endstream", (req: Request, res: Response) => {
  const { donator_name, amount_raw }: DonationData = req.body;

  console.log("Donasi telah didapatkan dari: " + donator_name);
  console.log("Donasi berjumlah: Rp." + amount_raw);
  console.log("Menjalankan fitur auto endstream");
  console.log(
    "========================================================================"
  );

  setTimeout(function () {
    keyAction.keyTap("i");
  }, 5000);

  res.json({
    status: "success",
    message: `Donation received from ${donator_name}`,
  });
});

app.listen(port, () => {
  console.log(
    "========================================================================"
  );
  console.log(
    `Aplikasi saweria hyers telah berjalan di server http://localhost:${port}`
  );
  console.log(
    "========================================================================"
  );
});
