window.BENCHMARK_DATA = {
  "lastUpdate": 1704398580517,
  "repoUrl": "https://github.com/jvllmr/sqlalchemy-sessionload",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "bdc2a5fb91324854778787ad32571c46c5ae8fa1",
          "message": "split test, benchmark and coverage into multiple files",
          "timestamp": "2024-01-03T21:37:47+01:00",
          "tree_id": "3be244c25dfea2ab0817185c74f928cedbf32e44",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/bdc2a5fb91324854778787ad32571c46c5ae8fa1"
        },
        "date": 1704314324233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 179.06890249743628,
            "unit": "iter/sec",
            "range": "stddev: 0.0019604376270080676",
            "extra": "mean: 5.584442558440973 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 921.6126619284289,
            "unit": "iter/sec",
            "range": "stddev: 0.00021081626796679937",
            "extra": "mean: 1.0850545368024236 msec\nrounds: 788"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.6306013688258876,
            "unit": "iter/sec",
            "range": "stddev: 0.015016041164739966",
            "extra": "mean: 380.14121479999403 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 97.74157229511616,
            "unit": "iter/sec",
            "range": "stddev: 0.002534283863357457",
            "extra": "mean: 10.231061118810821 msec\nrounds: 101"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "bdc2a5fb91324854778787ad32571c46c5ae8fa1",
          "message": "split test, benchmark and coverage into multiple files",
          "timestamp": "2024-01-03T21:37:47+01:00",
          "tree_id": "3be244c25dfea2ab0817185c74f928cedbf32e44",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/bdc2a5fb91324854778787ad32571c46c5ae8fa1"
        },
        "date": 1704314324233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 179.06890249743628,
            "unit": "iter/sec",
            "range": "stddev: 0.0019604376270080676",
            "extra": "mean: 5.584442558440973 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 921.6126619284289,
            "unit": "iter/sec",
            "range": "stddev: 0.00021081626796679937",
            "extra": "mean: 1.0850545368024236 msec\nrounds: 788"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.6306013688258876,
            "unit": "iter/sec",
            "range": "stddev: 0.015016041164739966",
            "extra": "mean: 380.14121479999403 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 97.74157229511616,
            "unit": "iter/sec",
            "range": "stddev: 0.002534283863357457",
            "extra": "mean: 10.231061118810821 msec\nrounds: 101"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d4b2789c17c860376212b10220a6f6845b842f34",
          "message": "Update actions/cache action to v3",
          "timestamp": "2023-12-15T18:23:26Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/4/commits/d4b2789c17c860376212b10220a6f6845b842f34"
        },
        "date": 1704314330255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 214.73365249821137,
            "unit": "iter/sec",
            "range": "stddev: 0.0019547430620568606",
            "extra": "mean: 4.656931917126169 msec\nrounds: 181"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1070.1401990681188,
            "unit": "iter/sec",
            "range": "stddev: 0.0008316244471838844",
            "extra": "mean: 934.456999999442 usec\nrounds: 841"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.480210036550243,
            "unit": "iter/sec",
            "range": "stddev: 0.012580083529187257",
            "extra": "mean: 287.33897940000475 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 118.52011926682259,
            "unit": "iter/sec",
            "range": "stddev: 0.0026222887394302392",
            "extra": "mean: 8.437386042016334 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d4b2789c17c860376212b10220a6f6845b842f34",
          "message": "Update actions/cache action to v3",
          "timestamp": "2023-12-15T18:23:26Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/4/commits/d4b2789c17c860376212b10220a6f6845b842f34"
        },
        "date": 1704314330255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 214.73365249821137,
            "unit": "iter/sec",
            "range": "stddev: 0.0019547430620568606",
            "extra": "mean: 4.656931917126169 msec\nrounds: 181"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1070.1401990681188,
            "unit": "iter/sec",
            "range": "stddev: 0.0008316244471838844",
            "extra": "mean: 934.456999999442 usec\nrounds: 841"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.480210036550243,
            "unit": "iter/sec",
            "range": "stddev: 0.012580083529187257",
            "extra": "mean: 287.33897940000475 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 118.52011926682259,
            "unit": "iter/sec",
            "range": "stddev: 0.0026222887394302392",
            "extra": "mean: 8.437386042016334 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f",
          "message": "run pre-commit on all files",
          "timestamp": "2024-01-03T21:38:11+01:00",
          "tree_id": "caaee076b638e530c0c86649daebf30d3963af14",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f"
        },
        "date": 1704314336548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 218.0745175891708,
            "unit": "iter/sec",
            "range": "stddev: 0.00156453995957059",
            "extra": "mean: 4.585588500000232 msec\nrounds: 184"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1112.0955281875815,
            "unit": "iter/sec",
            "range": "stddev: 0.0007170680696132573",
            "extra": "mean: 899.2033279998282 usec\nrounds: 875"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.0299944575038382,
            "unit": "iter/sec",
            "range": "stddev: 0.012046858908397119",
            "extra": "mean: 330.033607 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 125.20417275920617,
            "unit": "iter/sec",
            "range": "stddev: 0.0021352240027651087",
            "extra": "mean: 7.986954252101559 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f",
          "message": "run pre-commit on all files",
          "timestamp": "2024-01-03T21:38:11+01:00",
          "tree_id": "caaee076b638e530c0c86649daebf30d3963af14",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f"
        },
        "date": 1704314336548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 218.0745175891708,
            "unit": "iter/sec",
            "range": "stddev: 0.00156453995957059",
            "extra": "mean: 4.585588500000232 msec\nrounds: 184"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1112.0955281875815,
            "unit": "iter/sec",
            "range": "stddev: 0.0007170680696132573",
            "extra": "mean: 899.2033279998282 usec\nrounds: 875"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.0299944575038382,
            "unit": "iter/sec",
            "range": "stddev: 0.012046858908397119",
            "extra": "mean: 330.033607 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 125.20417275920617,
            "unit": "iter/sec",
            "range": "stddev: 0.0021352240027651087",
            "extra": "mean: 7.986954252101559 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7e7839febb8276646fc7cc5b1a811c8ed14df7c",
          "message": "Update actions/cache action to v3 (#4)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-03T21:39:20+01:00",
          "tree_id": "92d8fa5fb0267214046c32272d40587d9d3c69d2",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d7e7839febb8276646fc7cc5b1a811c8ed14df7c"
        },
        "date": 1704314407587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 208.75401197164533,
            "unit": "iter/sec",
            "range": "stddev: 0.0022327142685017085",
            "extra": "mean: 4.790327096256374 msec\nrounds: 187"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1076.5203368627529,
            "unit": "iter/sec",
            "range": "stddev: 0.00001253231479226513",
            "extra": "mean: 928.9188190482754 usec\nrounds: 735"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.160955757153028,
            "unit": "iter/sec",
            "range": "stddev: 0.022972509284582762",
            "extra": "mean: 316.3600115999941 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 115.1291433189704,
            "unit": "iter/sec",
            "range": "stddev: 0.0025424577995156075",
            "extra": "mean: 8.685898037384467 msec\nrounds: 107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7e7839febb8276646fc7cc5b1a811c8ed14df7c",
          "message": "Update actions/cache action to v3 (#4)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-03T21:39:20+01:00",
          "tree_id": "92d8fa5fb0267214046c32272d40587d9d3c69d2",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d7e7839febb8276646fc7cc5b1a811c8ed14df7c"
        },
        "date": 1704314407587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 208.75401197164533,
            "unit": "iter/sec",
            "range": "stddev: 0.0022327142685017085",
            "extra": "mean: 4.790327096256374 msec\nrounds: 187"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1076.5203368627529,
            "unit": "iter/sec",
            "range": "stddev: 0.00001253231479226513",
            "extra": "mean: 928.9188190482754 usec\nrounds: 735"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.160955757153028,
            "unit": "iter/sec",
            "range": "stddev: 0.022972509284582762",
            "extra": "mean: 316.3600115999941 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 115.1291433189704,
            "unit": "iter/sec",
            "range": "stddev: 0.0025424577995156075",
            "extra": "mean: 8.685898037384467 msec\nrounds: 107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "5ecd597a5a9abc1ef630c8066f0dfe37a086447d",
          "message": "ci remove benchmark and coverage from test",
          "timestamp": "2024-01-03T21:42:50+01:00",
          "tree_id": "41d682fd7afb4f7d165c346ff99ffe6c81cf2401",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5ecd597a5a9abc1ef630c8066f0dfe37a086447d"
        },
        "date": 1704314624605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 177.54279023115063,
            "unit": "iter/sec",
            "range": "stddev: 0.0020221423027266807",
            "extra": "mean: 5.632444993671987 msec\nrounds: 158"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 929.3069192392974,
            "unit": "iter/sec",
            "range": "stddev: 0.000012907665693069543",
            "extra": "mean: 1.0760707569234176 msec\nrounds: 650"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.540965193099009,
            "unit": "iter/sec",
            "range": "stddev: 0.013324186407296375",
            "extra": "mean: 393.5512390000042 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 101.93406409869931,
            "unit": "iter/sec",
            "range": "stddev: 0.0027722797760469965",
            "extra": "mean: 9.810263221053697 msec\nrounds: 95"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "5ecd597a5a9abc1ef630c8066f0dfe37a086447d",
          "message": "ci remove benchmark and coverage from test",
          "timestamp": "2024-01-03T21:42:50+01:00",
          "tree_id": "41d682fd7afb4f7d165c346ff99ffe6c81cf2401",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5ecd597a5a9abc1ef630c8066f0dfe37a086447d"
        },
        "date": 1704314624605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 177.54279023115063,
            "unit": "iter/sec",
            "range": "stddev: 0.0020221423027266807",
            "extra": "mean: 5.632444993671987 msec\nrounds: 158"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 929.3069192392974,
            "unit": "iter/sec",
            "range": "stddev: 0.000012907665693069543",
            "extra": "mean: 1.0760707569234176 msec\nrounds: 650"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.540965193099009,
            "unit": "iter/sec",
            "range": "stddev: 0.013324186407296375",
            "extra": "mean: 393.5512390000042 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 101.93406409869931,
            "unit": "iter/sec",
            "range": "stddev: 0.0027722797760469965",
            "extra": "mean: 9.810263221053697 msec\nrounds: 95"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "c22469582409b45f5ed319b854b55a6003b3a9c2",
          "message": "remove cache action from benchmark ci",
          "timestamp": "2024-01-03T21:46:36+01:00",
          "tree_id": "54348df001696158c735914682508861a8b79144",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/c22469582409b45f5ed319b854b55a6003b3a9c2"
        },
        "date": 1704314841014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 222.2262217743251,
            "unit": "iter/sec",
            "range": "stddev: 0.001698475043472033",
            "extra": "mean: 4.499919010527564 msec\nrounds: 190"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1122.334985889897,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519024087852635",
            "extra": "mean: 890.9995790669416 usec\nrounds: 879"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.9695905541134313,
            "unit": "iter/sec",
            "range": "stddev: 0.012273868902624812",
            "extra": "mean: 336.74676080000836 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 129.00741696585754,
            "unit": "iter/sec",
            "range": "stddev: 0.00017099417000737983",
            "extra": "mean: 7.751492305784674 msec\nrounds: 121"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "c22469582409b45f5ed319b854b55a6003b3a9c2",
          "message": "remove cache action from benchmark ci",
          "timestamp": "2024-01-03T21:46:36+01:00",
          "tree_id": "54348df001696158c735914682508861a8b79144",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/c22469582409b45f5ed319b854b55a6003b3a9c2"
        },
        "date": 1704314841014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 222.2262217743251,
            "unit": "iter/sec",
            "range": "stddev: 0.001698475043472033",
            "extra": "mean: 4.499919010527564 msec\nrounds: 190"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1122.334985889897,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519024087852635",
            "extra": "mean: 890.9995790669416 usec\nrounds: 879"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.9695905541134313,
            "unit": "iter/sec",
            "range": "stddev: 0.012273868902624812",
            "extra": "mean: 336.74676080000836 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 129.00741696585754,
            "unit": "iter/sec",
            "range": "stddev: 0.00017099417000737983",
            "extra": "mean: 7.751492305784674 msec\nrounds: 121"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "b8e6b2e0350460869b0e90ccb1443117c23cc452",
          "message": "add link to benchmark in readme",
          "timestamp": "2024-01-03T21:51:42+01:00",
          "tree_id": "56f82bfdd20530d3856cd3ba8ea96a8d5327768b",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b8e6b2e0350460869b0e90ccb1443117c23cc452"
        },
        "date": 1704315140230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.83035818391926,
            "unit": "iter/sec",
            "range": "stddev: 0.0010412817349641267",
            "extra": "mean: 3.5108617156401736 msec\nrounds: 211"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1418.3039416733795,
            "unit": "iter/sec",
            "range": "stddev: 0.00045658721779692237",
            "extra": "mean: 705.0674898499926 usec\nrounds: 1133"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.147864696716635,
            "unit": "iter/sec",
            "range": "stddev: 0.009469965688243109",
            "extra": "mean: 241.08790260000035 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 159.06349330111584,
            "unit": "iter/sec",
            "range": "stddev: 0.0016194249078504703",
            "extra": "mean: 6.286797675862341 msec\nrounds: 145"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "b8e6b2e0350460869b0e90ccb1443117c23cc452",
          "message": "add link to benchmark in readme",
          "timestamp": "2024-01-03T21:51:42+01:00",
          "tree_id": "56f82bfdd20530d3856cd3ba8ea96a8d5327768b",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b8e6b2e0350460869b0e90ccb1443117c23cc452"
        },
        "date": 1704315140230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.83035818391926,
            "unit": "iter/sec",
            "range": "stddev: 0.0010412817349641267",
            "extra": "mean: 3.5108617156401736 msec\nrounds: 211"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1418.3039416733795,
            "unit": "iter/sec",
            "range": "stddev: 0.00045658721779692237",
            "extra": "mean: 705.0674898499926 usec\nrounds: 1133"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.147864696716635,
            "unit": "iter/sec",
            "range": "stddev: 0.009469965688243109",
            "extra": "mean: 241.08790260000035 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 159.06349330111584,
            "unit": "iter/sec",
            "range": "stddev: 0.0016194249078504703",
            "extra": "mean: 6.286797675862341 msec\nrounds: 145"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "6d537847e8caef2b3facb2ba6413ce73e5c189da",
          "message": "install without changing lock in ci",
          "timestamp": "2024-01-04T20:55:31+01:00",
          "tree_id": "3156a68f7e0eb14cbbba48c25b822559d6284c22",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/6d537847e8caef2b3facb2ba6413ce73e5c189da"
        },
        "date": 1704398183880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 315.7070571305365,
            "unit": "iter/sec",
            "range": "stddev: 0.0010920664794828111",
            "extra": "mean: 3.1674933373013783 msec\nrounds: 252"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1809.886401629017,
            "unit": "iter/sec",
            "range": "stddev: 0.000053684396891738004",
            "extra": "mean: 552.5208649006557 usec\nrounds: 1510"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.461852005077098,
            "unit": "iter/sec",
            "range": "stddev: 0.007033306350205802",
            "extra": "mean: 224.12218040000198 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 173.33166321709717,
            "unit": "iter/sec",
            "range": "stddev: 0.001818893371103436",
            "extra": "mean: 5.769286357954717 msec\nrounds: 176"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "6d537847e8caef2b3facb2ba6413ce73e5c189da",
          "message": "install without changing lock in ci",
          "timestamp": "2024-01-04T20:55:31+01:00",
          "tree_id": "3156a68f7e0eb14cbbba48c25b822559d6284c22",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/6d537847e8caef2b3facb2ba6413ce73e5c189da"
        },
        "date": 1704398183880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 315.7070571305365,
            "unit": "iter/sec",
            "range": "stddev: 0.0010920664794828111",
            "extra": "mean: 3.1674933373013783 msec\nrounds: 252"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1809.886401629017,
            "unit": "iter/sec",
            "range": "stddev: 0.000053684396891738004",
            "extra": "mean: 552.5208649006557 usec\nrounds: 1510"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.461852005077098,
            "unit": "iter/sec",
            "range": "stddev: 0.007033306350205802",
            "extra": "mean: 224.12218040000198 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 173.33166321709717,
            "unit": "iter/sec",
            "range": "stddev: 0.001818893371103436",
            "extra": "mean: 5.769286357954717 msec\nrounds: 176"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "f7973b1dea4669a956010ea371f0af0f85f4292e",
          "message": "update dependencies",
          "timestamp": "2024-01-04T21:02:14+01:00",
          "tree_id": "39ee0043bfefbc5b155ca2bda406a2419ac583a7",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/f7973b1dea4669a956010ea371f0af0f85f4292e"
        },
        "date": 1704398579269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.6312842486219,
            "unit": "iter/sec",
            "range": "stddev: 0.0011010018689516714",
            "extra": "mean: 3.3940727053144806 msec\nrounds: 207"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1645.9417607803975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251776931886666",
            "extra": "mean: 607.5549110108644 usec\nrounds: 1326"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.370741875206283,
            "unit": "iter/sec",
            "range": "stddev: 0.010039284710522685",
            "extra": "mean: 228.79411060000052 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 169.92116477637916,
            "unit": "iter/sec",
            "range": "stddev: 0.0013858909839172485",
            "extra": "mean: 5.885082069182064 msec\nrounds: 159"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "f7973b1dea4669a956010ea371f0af0f85f4292e",
          "message": "update dependencies",
          "timestamp": "2024-01-04T21:02:14+01:00",
          "tree_id": "39ee0043bfefbc5b155ca2bda406a2419ac583a7",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/f7973b1dea4669a956010ea371f0af0f85f4292e"
        },
        "date": 1704398579269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.6312842486219,
            "unit": "iter/sec",
            "range": "stddev: 0.0011010018689516714",
            "extra": "mean: 3.3940727053144806 msec\nrounds: 207"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1645.9417607803975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251776931886666",
            "extra": "mean: 607.5549110108644 usec\nrounds: 1326"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.370741875206283,
            "unit": "iter/sec",
            "range": "stddev: 0.010039284710522685",
            "extra": "mean: 228.79411060000052 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 169.92116477637916,
            "unit": "iter/sec",
            "range": "stddev: 0.0013858909839172485",
            "extra": "mean: 5.885082069182064 msec\nrounds: 159"
          }
        ]
      }
    ]
  }
}