import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { players } from "/db";

function PlayersTable() {
  return (
    <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Name
          </th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            State
          </th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Role
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 border-t border-gray-100">
        <tr class="hover:bg-gray-50">
          <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div class="relative h-10 w-10">
              <img
                class="h-full w-full rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
            </div>
            <div class="text-sm">
              <div class="font-medium text-gray-700">Steven Jobs</div>
              <div class="text-gray-400">jobs@sailboatui.com</div>
            </div>
          </th>
          <td class="px-6 py-4">
            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
              Active
            </span>
          </td>
          <td class="px-6 py-4">Product Designer</td>
        </tr>
      </tbody>
    </table>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Live Ratings</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 class="text-3xl font-bold text-gray-900 text-center">Live Ratings</h1>
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <PlayersTable />
        </div>
      </main>
    </>
  );
}
